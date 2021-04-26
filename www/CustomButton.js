class CustomButton extends Widget {

  get _nativeType() {
    return 'elshadsm.CustomButton';
  }

}

tabris.NativeObject.defineProperties(CustomButton.prototype, {
  text: { type: 'string', default: '' },
  maxLines: { type: 'number', default: null }
});

tabris.NativeObject.defineEvents(CustomButton.prototype, {
  select: { native: true }
});

module.exports = CustomButton;
