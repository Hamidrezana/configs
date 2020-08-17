module.exports = {
	extends: ["plugin:vue/recommended", "prettier"],
	plugins: ["vue"],
	rules: {
		semi: ["error", "always"],
		quotes: ["error", "double"],
		"vue/html-indent": ["error", "tab"],
		indent: ["error", "tab", { SwitchCase: 1 }],
		"no-console": "off",
		"vue/max-attributes-per-line": [
			"error",
			{
				singleline: 7,
				multiline: {
					max: 1,
					allowFirstLine: false,
				},
			},
		],
		"vue/html-self-closing": [
			"error",
			{
				html: {
					void: "always",
					normal: "never",
					component: "always",
				},
				svg: "always",
				math: "always",
			},
		],
	},
};
