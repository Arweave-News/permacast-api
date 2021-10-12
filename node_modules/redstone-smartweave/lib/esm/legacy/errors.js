export var SmartWeaveErrorType;
(function (SmartWeaveErrorType) {
    SmartWeaveErrorType["CONTRACT_NOT_FOUND"] = "CONTRACT_NOT_FOUND";
})(SmartWeaveErrorType || (SmartWeaveErrorType = {}));
export class SmartWeaveError extends Error {
    constructor(type, optional = {}) {
        if (optional.message) {
            super(optional.message);
        }
        else {
            super();
        }
        this.type = type;
        this.otherInfo = optional;
    }
    getType() {
        return this.type;
    }
}
//# sourceMappingURL=errors.js.map