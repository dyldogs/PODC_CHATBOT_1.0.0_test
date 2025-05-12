(function() {
    class PODCWidget {
        constructor(config = {}) {
            this.config = {
                backendUrl: 'https://podc-chatbot-backend-v2.onrender.com',
                position: 'bottom-right',
                theme: 'light',
                ...config
            };
            this.userAccepted = false;
            this.introMessage = false;
            this.lastUserMessage = "";
            this.initialize();
        }

        initialize() {
            this.injectDependencies();
            this.injectStyles();
            this.createWidget();
            this.setupEventListeners();
        }

        injectDependencies() {
            // Add marked.js for markdown support
            const markedScript = document.createElement('script');
            markedScript.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
            document.head.appendChild(markedScript);
        }

        injectStyles() {
            const styles = document.createElement('style');
            styles.textContent = `
                // Copy contents of design.css here, prefixed with .podc-widget-
            `;
            document.head.appendChild(styles);
        }

        createWidget() {
            const template = `
                <div class="podc-widget-container">
                    <div class="podc-widget-header">
                        <span>Ask PODC</span>
                        <span class="podc-widget-arrow">▲</span>
                    </div>
                    <div class="podc-widget-body">
                        <div class="podc-widget-messages"></div>
                        <div id="loading" class="loading-overlay" style="display: none;">
                            <div class="spinner"></div>
                        </div>
                        <div class="podc-widget-input">
                            <input type="text" placeholder="Ask a question...">
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', template);
        }

        setupEventListeners() {
            // Copy event listener logic from script.js
            // Modify to use widget-specific selectors
        }
    }

    
    window.PODCWidget = PODCWidget;
})();