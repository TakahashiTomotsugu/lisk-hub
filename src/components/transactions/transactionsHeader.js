import React from 'react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import { translate } from 'react-i18next';
import styles from './transactions.css';

const TransactionsHeader = ({ t }) => (
  <div className={`${grid.row}  ${styles.rows} ${styles.paddingLeft}`} id="transactionsHeader">
    <div className={`${styles.leftText} ${grid['col-xs-6']}`}>{t('Address')}</div>
    <div className={`${styles.rightText} ${grid['col-xs-2']}`}>{t('Time')}</div>
    <div className={`${styles.rightText} ${grid['col-xs-2']}`}>{t('Amount')}</div>
    <div className={`${grid['col-xs-2']}`}></div>
  </div>);

export default translate()(TransactionsHeader);
