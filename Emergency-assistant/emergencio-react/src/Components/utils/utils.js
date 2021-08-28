export const getValueByType = (value, type) => {
  if (!value || value === "" || value === '""') return "---";
  switch (type.toLowerCase()) {
    case "date":
      value = JSON.parse(value);
      return value.year + "/" + value.month + "/" + value.day;

    case "location":
      const location = JSON.parse(value);
      const lat = parseFloat(location.lat);
      const lng = parseFloat(location.lng);
      return "(" + lat.toFixed(4) + ", " + lng.toFixed(4) + ")";
    default:
      return value.substring(1, value.length - 1);
  }
};
