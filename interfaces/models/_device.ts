// Export Types
export type IDeviceCreate = Omit<IDevice, 'lastUpdate' | 'deviceID'>;

// Export Interfaces
export interface IDevice {
    deviceID: string;
    branch: string | null;
    model: string | null;
    device: string | null;
    os: string; // name - version - buildID;
    lastUpdate: number | null;
}
