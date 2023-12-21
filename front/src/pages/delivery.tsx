import React from 'react';
import { wrapper } from '@/store/store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import cls from '@/styles/_delivery.module.scss';
import { useTranslation } from 'next-i18next';
import { MyPage } from '@/components/common/types';
import delivery1 from '@/assets/images/delivery1.png';
import delivery2 from '@/assets/images/delivery2.png';
import delivery3 from '@/assets/images/delivery3.png';
import delivery4 from '@/assets/images/delivery4.png';
import deliv1 from '@/assets/images/delivmet1.png';
import deliv2 from '@/assets/images/delivmet2.png';
import deliv3 from '@/assets/images/delivmet3.png';
import pay from '@/assets/images/pay.png';
import pay1 from '@/assets/images/pay1.png';
import pay2 from '@/assets/images/pay2.png';
import DeliveryItms from '@/components/DelivetyItm/DeliveryItms';

const Delivery: MyPage = () => {
  const { t } = useTranslation('common');

  const deliveryArr = [
    { img: delivery1, text: t('delivery1') },
    { img: delivery2, text: t('delivery2') },
    { img: delivery3, text: t('delivery3') },
    { img: delivery4, text: t('delivery4') },
  ];

  const deliveryMethods = [
    { img: deliv1, text: t('deliveryMethods1') },
    { img: deliv2, text: t('deliveryMethods2') },
    { img: deliv3, text: t('deliveryMethods3') },
  ];

  const payArr = [
    { img: pay, text: t('money') },
    { img: pay1, text: t('pay') },
    { img: pay2, text: 'Visa, MasterCard' },
  ];

  return (
    <div className={cls.delivery}>
      <h1 className={cls.delivery_title}>{t('delivery')}</h1>
      <h3 className={cls.delivery_subtitle}>{t('deliveryProcess')}</h3>
      <p className={cls.delivery_info}>{t('inform')}</p>
      <DeliveryItms array={deliveryArr} />
      <h3 className={cls.delivery_subtitle}>{t('deliveryM')}</h3>
      <DeliveryItms content={'space-around'} bgCl={'none'} array={deliveryMethods} />
      <h3 className={cls.delivery_subtitle}>{t('payment')}</h3>
      <p style={{ marginBottom: '30px' }}>{t('for')}</p>
      <DeliveryItms content={'space-around'} array={payArr} />
    </div>
  );
};

Delivery.Layout = 'Main';

export const getServerSideProps = wrapper.getServerSideProps(() => async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common', 'header', 'footer'])),
    },
  };
});

export default Delivery;
