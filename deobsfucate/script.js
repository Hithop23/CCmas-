$(document).ready(function() {
    const $validButton = $('button[name="valid"]');
    const $stopButton = $('#stop');
    const $ccInput = $('#cc');
    const $liveCount = $('.live');
    const $dieCount = $('.die');
    const $unknownCount = $('.unknown');
    const $successPanel = $('.success');
    const $dangerPanel = $('.danger');
    const $warningPanel = $('.warning');

    let isProcessing = false;
    let shouldStop = false;

    function updateCounter($element, increment) {
        $element.text(parseInt($element.text()) + increment);
    }

    function displayMessage($panel, message) {
        $panel.prepend(`<div>${message}</div>`);
    }

    async function validateCard(cardData) {
        try {
            const response = await $.post('api.php', { data: cardData });
            const jsonResponse = JSON.parse(response);

            switch (jsonResponse.status) {
                case "Live":
                    displayMessage($successPanel, jsonResponse.message);
                    updateCounter($liveCount, 1);
                    break;
                case "Die":
                    displayMessage($dangerPanel, jsonResponse.message);
                    updateCounter($dieCount, 1);
                    break;
                case "Unknown":
                    displayMessage($warningPanel, jsonResponse.message);
                    updateCounter($unknownCount, 1);
                    break;
                default:
                    console.error("Unexpected status");
            }
        } catch (error) {
            console.error('Error processing card:', error);
        }
    }

    async function processCards(cardList) {
        for (const cardData of cardList) {
            if (shouldStop) break;
            await validateCard(cardData.trim());
            await new Promise(resolve => setTimeout(resolve, 1500)); // Pausa entre solicitudes
        }
        finishProcessing();
    }

    function startProcessing() {
        isProcessing = true;
        shouldStop = false;
        $validButton.attr('disabled', true);
        $stopButton.attr('disabled', false);
        $ccInput.attr('disabled', true);
    }

    function finishProcessing() {
        isProcessing = false;
        $validButton.attr('disabled', false);
        $stopButton.attr('disabled', true);
        $ccInput.attr('disabled', false).val('');
    }

    $validButton.click(function(e) {
        e.preventDefault();
        const cardList = $ccInput.val().split('\n').filter(line => line.trim() !== '');
        
        if (cardList.length > 0) {
            startProcessing();
            processCards(cardList);
        }
    });

    $stopButton.click(function() {
        shouldStop = true;
    });
});
