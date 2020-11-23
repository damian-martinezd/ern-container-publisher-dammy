class DammyPublisher {
    /**
     * Gets the name of the publisher.
     */
    get name() {
        return 'dummy'
    }
  
    /**
     * Gets the platforms that this publisher supports.
     */
    get platforms() {
      return ['ios', 'android']
    }
  
    /**
     * Publish a Container using this publisher.
     */
    publish(config) {
      this.logConfig(config)
      return Promise.resolve()
    }
  
    logConfig(config) {
      console.log(`
  ==================================================================
  I am a dammy publisher, I just log the config I was called with.
  By the way ... here it is !
  ==================================================================
  ${JSON.stringify(config, null, 2)}`)
    }
  }
  
  exports.default = DammyPublisher;