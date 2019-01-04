module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'jest': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 2017,
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true
		},
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'space-unary-ops': [
			'error', {
				'words'     : true,
				'nonwords'  : true,
				'overrides' : {
					'++' : false,
					'-'  : false,
				}
			}
		],
		'space-before-function-paren': [
			'warn',
			'always'
		],
		'indent': [
			'error',
			'tab',
			{ 'SwitchCase': 1 }
		],
	  	'key-spacing': [
	  		'warn',
		  	{
		  		beforeColon: true,
			  	align: 'colon'
			}
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'react/jsx-uses-vars': [
			2
		],
		'react/display-name': 0,
		'no-console': 0,
		'no-empty': 0,
		'no-useless-escape': 0,
		'no-extra-boolean-cast': 0,
		'react/prop-types': 0,
		'jsx-quotes': [
			'error',
			'prefer-single'
		],
		'object-curly-spacing': [
			'warn',
			'always'
		]
	},
	'globals': {
		'models': false,
		'discrs': false,
		'__DEV__': true
	}
}

