"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const status_pipe_1 = require("./pipe/status.pipe");
const severity_pipe_1 = require("./pipe/severity.pipe");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [
            status_pipe_1.StatusPipe,
            severity_pipe_1.SeverityPipe
        ],
        exports: [
            common_1.CommonModule,
            status_pipe_1.StatusPipe,
            severity_pipe_1.SeverityPipe
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map