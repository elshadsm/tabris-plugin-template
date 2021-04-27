import { EventObject, Listeners, Widget } from 'tabris';

declare global {

  namespace elshadsm {

    export class CustomButton extends Widget {

      public readonly onSelect: Listeners<EventObject<this>>;

      public text: string;
      public maxLines: number;

      constructor(properties: Partial<CustomButton>);

    }

  }

}

export { };
