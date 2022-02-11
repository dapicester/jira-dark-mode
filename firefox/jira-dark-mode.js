applyStyles()
// applyCustomProps()


let oldHref = document.location.href;

window.onload = function () {
    const bodyList = document.querySelector("body")

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (oldHref != document.location.href) {
                oldHref = document.location.href;
                applyStyles();
            }
        });
    });

    const config = {
        childList: true,
        subtree: true
    };

    observer.observe(bodyList, config);
};

setInterval(() => {
    applyStyles()
}, 10000);

function applyCustomProps() {
    document.documentElement.style.setProperty('--ds-background-default', '#112');
    document.documentElement.style.setProperty('--ds-background-PageTopElements', '#112');

    document.documentElement.style.setProperty('--ds-background-caseText', '#fff');
    document.documentElement.style.setProperty('--ds-background-caseElements', '#334');
    document.documentElement.style.setProperty('--ds-background-caseElementsBorder', '#112');
    document.documentElement.style.setProperty('--ds-background-caseElementCaseNumberFg', '#fff');
    document.documentElement.style.setProperty('--ds-background-caseElementCaseNumberBg', '#0052cc');
    document.documentElement.style.setProperty('--ds-background-selectCaseElement', '#0052cc');

    document.documentElement.style.setProperty('--ds-background-swimlaneColumns', '#223');
    document.documentElement.style.setProperty('--ds-background-swimLaneGaps', '#112');
    document.documentElement.style.setProperty('--ds-background-swimLaneFixedHeader', '#112');

    document.documentElement.style.setProperty('--ds-background-openJiraCase', '#000');
}

function applyStyles() {
    document.body.style.filter = "invert() hue-rotate(180deg)";

    const imgElementSelectors = 'img, [style*="background"]';
    const imgElements = document.querySelectorAll(imgElementSelectors)
    imgElements.forEach(imgElement => {
        try {
            imgElement.style.filter = "invert() hue-rotate(180deg)"
        } catch (error) {

        }
    })

    return;

    // GENERAL
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#000";

    const textElementSelectors = "#jira p, #jira .subnavigator-title, #jira h1, #jira h2, #jira h3, #jira h4, #jira h5, #jira h6";
    const textElements = document.querySelectorAll(textElementSelectors)
    textElements.forEach(textElement => {
        try {
            textElement.style.color = "#fff"

            if (textElement.parentElement) {
                textElement.parentElement.style.color = "#fff"

                if (textElement.parentElement.parentElement) {
                    textElement.parentElement.parentElement.style.color = "#fff"
                }
            }

            if (textElement.nextElementSibling) {
                textElement.nextElementSibling.style.color = "#fff"
            }
        } catch (error) {

        }
    })

    const pageTopElementSelectors = "#jira .aui-page-header, .aui-page-panel, .aui-page-panel-nav";
    const pageTopElements = document.querySelectorAll(pageTopElementSelectors)
    pageTopElements.forEach(pageTopElement => {
        pageTopElement.style.backgroundColor = "var(--ds-background-PageTopElements)"
    })

    // BOARD / SWIMLANES
    const swimlaneColumnSelectors = "#jira .ghx-column";
    const swimlaneColumns = document.querySelectorAll(swimlaneColumnSelectors)
    swimlaneColumns.forEach(swimlaneColumn => {
        swimlaneColumn.style.backgroundColor = "var(--ds-background-swimlaneColumns)"
    })

    const caseElementSelectors = "#jira .ghx-issue";
    const caseElements = document.querySelectorAll(caseElementSelectors)
    caseElements.forEach(caseElement => {
        caseElement.style.border = "1px solid var(--ds-background-caseElementsBorder)"
        caseElement.style.borderRadius = "4px"
        caseElement.style.backgroundColor = "var(--ds-background-caseElements)"

        caseElement.querySelector(".ghx-key").style.padding = "0 4px"
        caseElement.querySelector(".ghx-key").style.borderRadius = "4px"
        caseElement.querySelector(".ghx-key").style.color = "var(--ds-background-caseElementCaseNumberFg)"
        caseElement.querySelector(".ghx-key").style.backgroundColor = "var(--ds-background-caseElementCaseNumberBg)"
    })

    const caseTextSelectors = "#jira .ghx-summary, .ghx-summary .ghx-inner";
    const caseTexts = document.querySelectorAll(caseTextSelectors)
    caseTexts.forEach(caseText => {
        caseText.style.color = "var(--ds-background-caseText)"
    })

    const selectedCaseElementSelectors = "#jira .js-issue.ghx-selected, #jira .js-issue.ghx-selected .ghx-items-container";
    const selectedCaseElements = document.querySelectorAll(selectedCaseElementSelectors)
    selectedCaseElements.forEach(selectedCaseElement => {
        selectedCaseElement.style.backgroundColor = "var(--ds-background-selectCaseElement)"
    })

    const swimLaneGapBackground = document.querySelector("#jira #ghx-pool");
    swimLaneGapBackground.style.backgroundColor = "var(--ds-background-swimLaneGaps)";

    const swimLaneFixedHeader = document.querySelector("#jira #ghx-column-header-group.ghx-fixed");
    swimLaneFixedHeader.style.backgroundColor = "var(--ds-background-swimLaneFixedHeader)";

    // OPEN JIRA CASE (pop-up)
    const tryToFindOpenJiraCaseHeaderInterval = window.setInterval(() => {
        const openJiraCaseHeader = document.querySelector("#jira #jira-issue-header");

        if (openJiraCaseHeader) {
            const openJiraCaseWrapper = openJiraCaseHeader.parentElement.parentElement;

            if (openJiraCaseWrapper) {
                openJiraCaseWrapper.style.backgroundColor = "var(--ds-background-openJiraCase)";
            }

        }
    }, 2000);
}