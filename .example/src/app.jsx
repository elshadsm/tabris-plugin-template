import { contentView } from 'tabris';

contentView.append(
  <elshadsm.CustomButton
    id='customButton'
    left={16}
    right={16}
    centerY
    onSelect={() => console.log('Button Selected!')} />
);
