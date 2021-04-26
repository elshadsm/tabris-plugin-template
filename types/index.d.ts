import { Listeners, Widget } from 'tabris';

declare global {

  namespace elshadsm {

    export class CustomButton extends Widget {

      public readonly onSelect: Listeners<{ target: CustomButton }>;

      public text: string;
      public maxLines: number;

      constructor(properties: Partial<CustomButton>);

    }

  }

}

export { };
