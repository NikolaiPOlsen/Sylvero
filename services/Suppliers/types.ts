export interface PartsSupplier {
    fetchParts: (query: string) => Promise<Device[]>;
}