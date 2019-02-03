
# Application Configuration Fall Through Prototype

## Purpose
To show a way of retrieving an application setting from either a database value, an environment
variable or a settings file.

The order of preference for fetching the settings are db, environment then the settings file.

The order allows for the greatest flexibility for runtime configuration.
