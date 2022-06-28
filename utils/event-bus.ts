class EventBus {

    listeners: Map<string, Function[]> = new Map();

    private getListenersByTopic(topic: string): Function[] {
        return this.listeners.get(topic) || [];
    }

    public subscribe(topic: string, fn: Function): void {
        this.listeners.set(topic, [...this.getListenersByTopic(topic), fn]);
    }

    public async publish(topic: string, value: any): Promise<void> {
        this.getListenersByTopic(topic).forEach(listener => listener(value));
    }

}

export const eventBus = new EventBus();