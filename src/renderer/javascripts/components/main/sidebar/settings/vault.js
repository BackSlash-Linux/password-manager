import React from 'react'
import { useSelector } from 'react-redux'
import DownloadIcon from 'download.svg'

const {
  showSaveDialog,
  sendBackupSave,
  sendVaultConnect,
  sendVaultDisconnect
} = window

const Vault = ({ section }) => {
  const syncEnabled = useSelector(state => state.sync.enabled)

  const onClickSaveBackup = () => {
    showSaveDialog(({ canceled, filePath }) => {
      if (!canceled) sendBackupSave(filePath)
    })
  }

  const onClickConnect = () => {
    sendVaultConnect()
  }

  const onClickDisconnect = () => {
    sendVaultDisconnect()
  }

  // eslint-disable-next-line no-unused-vars
  const syncAction = () => {
    if (syncEnabled) {
      return (
        <div className="button danger" onClick={onClickDisconnect}>
          Disconnect Google Drive
        </div>
      )
    }
    return (
      <div className="button" onClick={onClickConnect}>
        Connect your Google Drive
      </div>
    )
  }

  if (section !== 'vault') return null

  return (
    <>
      <h1>Vault Settings</h1>
      {/* <div className="section">
        <strong>Synchronize</strong>
        <div>Synchronize your vault with Google Drive</div>
        {syncAction()}
      </div> */}

      <div className="section">
        <strong>Backup</strong>
        <div>Allows you to save a backup of your default vault file</div>
        <div className="button iconed" onClick={onClickSaveBackup}>
          <DownloadIcon width="16" height="16" /> Save Vault File
        </div>
      </div>

      <div className="section">
        <strong>About Password Manager</strong>
        <div>Password Manager by BackSlash Linux</div>
        <div>v0.1.0</div>
      </div>
    </>
  )
}

export default Vault
