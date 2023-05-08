import { showMessage } from "react-native-flash-message";
module.exports = {
  showShort(message, type) {
    this.show(message, type, 3000);
  },
  showLong(message, type) {
    this.show(message, type, 6000);
  },
  show(message, type, duration) {
    if (duration != 0 && !duration) duration = 3000;
    let _type = "info";
    switch (type) {
      case "warning":
      case "info":
      case "success":
      case "danger":
        _type = type;
        break;
    }
    this.showWithTitle("IVIRSE", message, _type, duration);
  },
  showWithTitle(message, description, type, duration) {
    showMessage({
      message,
      description,
      type,
      duration,
    });
  },
};
