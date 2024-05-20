const serialize = (form) => {
  var result = [];
  if (typeof form === "object" && form.nodeName === "FORM")
    Array.prototype.slice.call(form.elements).forEach(function (control) {
      if (
        control.name &&
        !control.disabled &&
        ["file", "reset", "submit", "button"].indexOf(control.type) === -1
      )
        if (control.type === "select-multiple")
          Array.prototype.slice
            .call(control.options)
            .forEach(function (option) {
              if (option.selected)
                result.push(control.name + "=" + option.value);
            });
        else if (
          ["checkbox", "radio"].indexOf(control.type) === -1 ||
          control.checked
        )
          result.push(control.name + "=" + control.value);
    });
  var data = result.join("&").replace(/%20/g, "+");

  const serializeToJSON = (str) =>
    str
      .split("&")
      .map((x) => x.split("="))
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: isNaN(value) ? value : Number(value),
        }),
        {}
      );

  return serializeToJSON(data);
};
export default serialize;
