// Interfaces
import type { IServerGetPages } from '@interfaces';

const Index: IServerGetPages = (totals) =>
    totals % 10 === 0 ? totals / 10 : Math.floor(totals / 10) + 1;

export default Index;
