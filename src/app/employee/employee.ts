export class Employee {
    static defaultName = "Test"; // public static field
    private readonly id: number; // private instance variable
    constructor(id: number) {
        this.id = id;
    }

    get getEmployeeId(): number {
        return this.id;
    }
}
