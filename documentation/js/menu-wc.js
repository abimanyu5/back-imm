'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">back-imm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' :
                                            'id="xs-controllers-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' :
                                        'id="xs-injectables-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-5a54f9311c4408748c1aa9c9ce1519189f6c3a7a6891a1c1a6db9757fb5e4980116ab457d9cc8257b8f7820710dd43b23359e1281ff71f52a86619cbe1990b7e"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-5a54f9311c4408748c1aa9c9ce1519189f6c3a7a6891a1c1a6db9757fb5e4980116ab457d9cc8257b8f7820710dd43b23359e1281ff71f52a86619cbe1990b7e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5a54f9311c4408748c1aa9c9ce1519189f6c3a7a6891a1c1a6db9757fb5e4980116ab457d9cc8257b8f7820710dd43b23359e1281ff71f52a86619cbe1990b7e"' :
                                            'id="xs-controllers-links-module-AuthModule-5a54f9311c4408748c1aa9c9ce1519189f6c3a7a6891a1c1a6db9757fb5e4980116ab457d9cc8257b8f7820710dd43b23359e1281ff71f52a86619cbe1990b7e"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-5a54f9311c4408748c1aa9c9ce1519189f6c3a7a6891a1c1a6db9757fb5e4980116ab457d9cc8257b8f7820710dd43b23359e1281ff71f52a86619cbe1990b7e"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-5a54f9311c4408748c1aa9c9ce1519189f6c3a7a6891a1c1a6db9757fb5e4980116ab457d9cc8257b8f7820710dd43b23359e1281ff71f52a86619cbe1990b7e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5a54f9311c4408748c1aa9c9ce1519189f6c3a7a6891a1c1a6db9757fb5e4980116ab457d9cc8257b8f7820710dd43b23359e1281ff71f52a86619cbe1990b7e"' :
                                        'id="xs-injectables-links-module-AuthModule-5a54f9311c4408748c1aa9c9ce1519189f6c3a7a6891a1c1a6db9757fb5e4980116ab457d9cc8257b8f7820710dd43b23359e1281ff71f52a86619cbe1990b7e"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' :
                                            'id="xs-controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' :
                                        'id="xs-injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-2333fcba8b4d0a469f43f618559e116b71636e3c31c8dbd5f86d8e773c47c95dd91fd3db0bef68708f7f1f2e798c169421e07141fb3a35542470c3717b9e97e1"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-2333fcba8b4d0a469f43f618559e116b71636e3c31c8dbd5f86d8e773c47c95dd91fd3db0bef68708f7f1f2e798c169421e07141fb3a35542470c3717b9e97e1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-2333fcba8b4d0a469f43f618559e116b71636e3c31c8dbd5f86d8e773c47c95dd91fd3db0bef68708f7f1f2e798c169421e07141fb3a35542470c3717b9e97e1"' :
                                            'id="xs-controllers-links-module-TaskModule-2333fcba8b4d0a469f43f618559e116b71636e3c31c8dbd5f86d8e773c47c95dd91fd3db0bef68708f7f1f2e798c169421e07141fb3a35542470c3717b9e97e1"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-2333fcba8b4d0a469f43f618559e116b71636e3c31c8dbd5f86d8e773c47c95dd91fd3db0bef68708f7f1f2e798c169421e07141fb3a35542470c3717b9e97e1"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-2333fcba8b4d0a469f43f618559e116b71636e3c31c8dbd5f86d8e773c47c95dd91fd3db0bef68708f7f1f2e798c169421e07141fb3a35542470c3717b9e97e1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-2333fcba8b4d0a469f43f618559e116b71636e3c31c8dbd5f86d8e773c47c95dd91fd3db0bef68708f7f1f2e798c169421e07141fb3a35542470c3717b9e97e1"' :
                                        'id="xs-injectables-links-module-TaskModule-2333fcba8b4d0a469f43f618559e116b71636e3c31c8dbd5f86d8e773c47c95dd91fd3db0bef68708f7f1f2e798c169421e07141fb3a35542470c3717b9e97e1"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});