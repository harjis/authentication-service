declare namespace FrontpageModuleCssNamespace {
  export interface IFrontpageModuleCss {
    container: string;
  }
}

declare const FrontpageModuleCssModule: FrontpageModuleCssNamespace.IFrontpageModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FrontpageModuleCssNamespace.IFrontpageModuleCss;
};

export = FrontpageModuleCssModule;
