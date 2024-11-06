$(document).ready(function() {
    const $validButton = $("button[name='valid']");
    const $stopButton = $("#stop");
    const $ccInput = $("#cc");
    const $liveCount = $(".live");
    const $dieCount = $(".die");
    const $unknownCount = $(".unknown");
    const $successPanel = $(".success");
    const $dangerPanel = $(".danger");
    const $warningPanel = $(".warning");
    const $infoPanel = $(".info");

    let isProcessing = false;
    let shouldStop = false;

    function updateCounter($element, value) {
        $element.text(parseInt($element.text()) + value);
    }

    function displayMessage($panel, message) {
        $panel.prepend(`<div>${message}</div>`);
    }

    function toggleControls(isProcessing) {
        $validButton.prop("disabled", isProcessing);
        $stopButton.prop("disabled", !isProcessing);
        $ccInput.prop("disabled", isProcessing);
    }

    async function processCard(cardData) {
        try {
            const response = await $.post("api.php", { data: cardData });
            const jsonResponse = JSON.parse(response);

            switch (jsonResponse.error) {
                case 1:
                    displayMessage($successPanel, jsonResponse.msg);
                    updateCounter($liveCount, 1);
                    break;
                case 2:
                    displayMessage($dangerPanel, jsonResponse.msg);
                    updateCounter($dieCount, 1);
                    break;
                case 3:
                    displayMessage($warningPanel, jsonResponse.msg);
                    updateCounter($unknownCount, 1);
                    break;
                case 4:
                    displayMessage($infoPanel, jsonResponse.msg + "<br>");
                    break;
                default:
                    console.error("Unexpected error code in response");
            }
        } catch (error) {
            console.error("Error processing card:", error);
        }
    }

    async function processAllCards(cardList) {
        for (const cardData of cardList) {
            if (shouldStop) break;
            await processCard(cardData.trim());
            await new Promise(resolve => setTimeout(resolve, 1500)); // Delay between requests
        }
        finishProcessing();
    }

    function startProcessing() {
        isProcessing = true;
        shouldStop = false;
        toggleControls(true);
    }

    function finishProcessing() {
        isProcessing = false;
        toggleControls(false);
        $ccInput.val("");
    }

    $validButton.click(function(e) {
        e.preventDefault();

        const cardList = $ccInput.val().split("\n").filter(line => line.trim() !== "");
        
        if (cardList.length === 0) {
            $infoPanel.show().html("<b>Error: No valid input</b>");
            return;
        }

        startProcessing();
        processAllCards(cardList);
    });

    $stopButton.click(function() {
        shouldStop = true;
    });
});
