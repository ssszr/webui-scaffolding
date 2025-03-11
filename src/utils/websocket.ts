class WebSocketClient {
    private socket: WebSocket | null = null;
    private url: string;
    private messageListeners: ((message: string) => void)[] = [];
    private errorListeners: ((error: Event) => void)[] = [];
    private closeListeners: ((event: CloseEvent) => void)[] = [];

    constructor(url: string) {
        this.url = url;
    }

    public connect(): void {
        this.socket = new WebSocket(this.url);

        this.socket.onopen = () => {
            console.log('WebSocket connected');
        };

        this.socket.onmessage = (event: MessageEvent) => {
            this.messageListeners.forEach(listener => listener(event.data));
        };

        this.socket.onerror = (error: Event) => {
            this.errorListeners.forEach(listener => listener(error));
        };

        this.socket.onclose = (event: CloseEvent) => {
            this.closeListeners.forEach(listener => listener(event));
        };
    }

    public send(message: string): void {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.error('WebSocket is not connected');
        }
    }

    public addMessageListener(listener: (message: string) => void): void {
        this.messageListeners.push(listener);
    }

    public addErrorListener(listener: (error: Event) => void): void {
        this.errorListeners.push(listener);
    }

    public addCloseListener(listener: (event: CloseEvent) => void): void {
        this.closeListeners.push(listener);
    }

    public close(): void {
        if (this.socket) {
            this.socket.close();
        }
    }
}

export default WebSocketClient;