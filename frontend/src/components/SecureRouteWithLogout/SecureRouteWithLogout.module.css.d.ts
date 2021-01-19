declare namespace SecureRouteWithLogoutModuleCssNamespace {
  export interface ISecureRouteWithLogoutModuleCss {
    container: string;
  }
}

declare const SecureRouteWithLogoutModuleCssModule: SecureRouteWithLogoutModuleCssNamespace.ISecureRouteWithLogoutModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SecureRouteWithLogoutModuleCssNamespace.ISecureRouteWithLogoutModuleCss;
};

export = SecureRouteWithLogoutModuleCssModule;
