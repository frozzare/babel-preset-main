const defaults = {
    'presetEnv': {
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        targets: '> 0.25%, not dead, node > 8',
        spec: false,
        loose: false,
        modules: 'auto',
        debug: false,
        include: [],
        exclude: [],
        forceAllTransforms: false,
        configPath: process.cwd(),
        ignoreBrowserslistConfig: false,
        shippedProposals: false
    },
    'objectRestSpread': {
        loose: false,
        useBuiltIns: true
    },
    'classProperties': {
        loose: true
    },
    'throwExpressions': {},
    'privateMethods': {
        loose: true
    },
    'optionalChaining': {
        loose: false
    },
    'nullishCoalescingOperator': {
        loose: false
    },
    'exportDefaultFrom': {},
    'decorators': {
        decoratorsBeforeExport: true,
        legacy: false
    },
    'transformRuntime': {
        absoluteRuntime: false,
        corejs: { version: 3, proposals: true },
        helpers: true,
        regenerator: true,
        useESModules: true
    },
    'transformRegenerator': {
        asyncGenerators: false,
        generators: false,
        async: false
    },
    'partialApplication': {}
};

module.exports = (options) => {
    return merge(defaults, options);
};

const merge = (o1, o2) => {
    for (let key in Object.keys(o2)) {
        o1[key] = typeof o2[key] === "object" ? merge(o1[key], o2[key]) : o2[key];
    }
    return o1;
};
