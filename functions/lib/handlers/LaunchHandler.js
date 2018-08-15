"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LaunchHandler {
    static handler() {
        return {
            LaunchRequest() {
                this.emit(':ask', 'Welcome to our skill.');
            },
            FindStoreIntent() {
                this.emit(':ask', 'Your store is Union Square.');
            }
        };
    }
}
exports.default = LaunchHandler;
//# sourceMappingURL=LaunchHandler.js.map