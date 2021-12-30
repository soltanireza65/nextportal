export class Constants {
  public static stsAuthority = `${process.env.APP_AUTH_URL}/`;
  //
  public static clientId = process.env.APP_ODIC_CLIENT_ID;
  public static clientRoot = `${process.env.APP_OIDC_URL}/`;
  public static clientScope = process.env.APP_SCOPES;
}
