"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, accountNumber) {
        var _this = this;
        this.balance = 0;
        this.status = true;
        this.setName = function (name) {
            _this.name = name;
            console.log('Nome alterado com sucesso!');
        };
        this.getName = function () {
            return _this.name;
        };
        this.deposit = function () {
            if (_this.validateStatus()) {
                console.log('Voce depositou');
            }
        };
        this.withdraw = function () {
            console.log('Voce sacou');
        };
        this.getBalance = function () {
            console.log(_this.balance);
        };
        this.validateStatus = function () {
            if (_this.status) {
                return _this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
    return DioAccount;
}());
exports.DioAccount = DioAccount;
