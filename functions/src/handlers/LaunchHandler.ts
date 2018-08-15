
export default class LaunchHandler {

    public static handler() {

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
