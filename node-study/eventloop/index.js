const eventloop = {
  queue: [],
  loop() {
    while (this.queue.length) {
      const cbk = this.queue.shift();
      cbk();

      setTimeout(this.loop.bind(this), 50);
    }
  },
  add(callback) {
    this.queue.push(callback);
  },
};
eventloop.loop();
