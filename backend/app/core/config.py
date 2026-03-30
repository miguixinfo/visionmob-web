from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    # TODO: set production enviroments
    # App
    app_name: str = "VisionMob API"
    debug: bool = False
    environment: str = "production"
    secret_key: str
    allowed_origins: list[str] = ["http://localhost:5173"]

    # Database
    database_url: str

    # Cloudflare R2
    r2_account_id: str = ""
    r2_access_key_id: str = ""
    r2_secret_access_key: str = ""
    r2_bucket_name: str = "visionmob-audio"
    r2_public_url: str = ""

    # Email
    resend_api_key: str = ""
    email_from: str = "noreply@visionmob.com"


settings = Settings()