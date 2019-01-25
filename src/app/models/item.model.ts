export class Item {
    display: boolean = false;
    constructor(public id: number, public description: string, public price: number, public image: string, public category: string) {}
}