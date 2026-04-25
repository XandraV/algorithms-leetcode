class Spreadsheet {
    private cells: Map<string, number>;

    constructor(rows: number) {
        this.cells = new Map();
    }

    setCell(cell: string, value: number): void {
        this.cells.set(cell, value);
    }

    resetCell(cell: string): void {
        this.cells.set(cell, 0);
    }

    getValue(formula: string): number {
        const [left, right] = formula.slice(1).split("+");
        return this.getTokenValue(left) + this.getTokenValue(right);
    }

    private getTokenValue(token: string): number {
        // If it's a number
        if (!isNaN(Number(token))) {
            return Number(token);
        }

        // Otherwise it's a cell
        return this.cells.get(token) ?? 0;
    }
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */