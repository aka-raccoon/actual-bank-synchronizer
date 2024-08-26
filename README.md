# Actual Bank Synchronizer

Simple container image for starting bank data sync in the [Actual](https://actualbudget.org) budget application.

## Usage

1. **Create a `.env` file in the root directory and add the required environment variables:**

    ```env
    DATA_DIR=/path/to/budget/file
    SERVER_URL=https://xxxxxxx.dev
    PASSWORD=xxxxxx
    SYNC_ID=your_sync_id
    ```

2. **Run the Docker container:**

    ```sh
    docker run --env-file .env ghcr.io/aka-raccoon/actual-bank-synchronizer
    ```

### Environment Variables

The following environment variables are required:

- `DATA_DIR`: Path to the budget file
- `SERVER_URL`: URL of the Actual server
- `PASSWORD`: Password for the Actual server
- `SYNC_ID`: Synchronization ID
