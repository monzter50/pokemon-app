// eslint-disable-next-line func-names
const searchingFor = text =>
  function(x) {
    return x.name.toLowerCase().includes(text.toLowerCase()) || !text;
  };
export default searchingFor;
