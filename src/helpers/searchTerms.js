export const searchingFor = (text) => function (x) {
	return x.name.toLowerCase().includes(text.toLowerCase()) || !text;
};
