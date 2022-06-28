class EventBus {

    listeners: Map<string, Function[]> = new Map();

    private getListenersByTopic(topic: string): Function[] {
        return this.listeners.get(topic) || [];
    }

    public subscribe(topic: string, fn: Function): any {
        this.listeners.set(topic, [...this.getListenersByTopic(topic), fn]);

        //TODO: create an interface to standardize this returned value
        return {
            unsubscribe: () => {
                this.listeners.set(topic, this.getListenersByTopic(topic).filter(listener => listener !== fn));
            }
        };
    }

    public async publish(topic: string, value: any): Promise<void> {
        this.getListenersByTopic(topic).forEach(listener => listener(value));
    }

}

export const eventBus = new EventBus();