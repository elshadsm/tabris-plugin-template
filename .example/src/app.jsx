import { contentView } from 'tabris';

contentView.append(
  <elshadsm.CustomButton
    id='customButton'
    left={16}
    right={16}
    centerY
    text='Custom Button'
    maxLines={1}
    onSelect={() => console.log('Button Selected!')} />
);
