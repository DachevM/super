import React, { useCallback, useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

import { type IOrders } from "../../../types/types";

interface DescrProps {
  order: IOrders;
  setShow: (v: boolean) => void;
}

const styles = { color: "#737680" };

const OrdersDescr = ({ order, setShow }: DescrProps) => {
  const [categ, setCateg] = useState("");

  const handleChange = useCallback((e: SelectChangeEvent) => {
    setCateg(e.target.value);
  }, []);

  return (
    <div className={"orders_modal_descr"}>
      <div className={"orders_descr_head"}>
        <button
          onClick={useCallback(() => {
            setShow(false);
          }, [])}
          className={"order_butt_close"}
        >
          Закрыть
        </button>
        <button
          onClick={useCallback(() => {
            setShow(false);
          }, [])}
          className={"order_butt_confirm"}
        >
          Подтвердить
        </button>
      </div>
      <div className={"orders_descr_body"}>
        <div className={"edit_descr"}>
          <label form={"outlined-basic"}>Заказчик</label>
          <input
            type={"text"}
            value={order.user.name + " " + order.user.lastName}
            className={"orders_descr_inp"}
          />
          <label form={"outlined-basic"}>Номер заказа</label>
          <input
            type={"text"}
            value={order.order_number}
            className={"orders_descr_inp"}
          />
          <label form={"outlined-basic"}>Дата оформления</label>
          <input
            type={"text"}
            value={order.date}
            className={"orders_descr_inp"}
          />

          <label form={"outlined-basic"}>Способ оплаты</label>
          <div className={"orders_descr_select"}>
            <FormControl fullWidth={true} size="small">
              <Select
                displayEmpty
                id="demo-select-small"
                value={categ}
                onChange={handleChange}
              >
                <MenuItem disabled value="">
                  <em style={styles}>Выберите категорию</em>
                </MenuItem>
                <MenuItem value={5}>Наличными курьеру</MenuItem>
                <MenuItem value={10}>Онлайн</MenuItem>
              </Select>
            </FormControl>
          </div>
          <label form={"demo-select-small"}>Способ получения</label>
          <input
            type={"text"}
            value={order.delivery_type}
            className={"orders_descr_inp"}
          />
          <label form={"demo-select-small"}>
            {order.delivery_type === "DELIVERY"
              ? "Пункт доставки"
              : "Пункт самовывоза"}
          </label>
          <input
            type={"text"}
            value={order.warehouse.city}
            className={"orders_descr_inp"}
          />
          <label form={"demo-select-small"}>Дополнительная информация</label>
          <input
            type={"text"}
            placeholder={"Поднимитесь, пожалуйста, на 4 этаж"}
            className={"orders_descr_large_inp"}
          />
          <label form={"demo-select-small"}>
            Дополнительная информация по оплате
          </label>
          <input
            type={"text"}
            placeholder={"Перевести на карту"}
            className={"orders_descr_large_inp"}
          />
        </div>
        <p>Товары</p>
        <div className={"orders_products"}>
          <div className={"orders_ins_product"}>
            <span>Крем</span>
            <span>SKUOO2</span>
          </div>
          <div className={"orders_ins_product"}>
            <span>Количество</span>
            <span>1</span>
          </div>
          <div className={"orders_ins_product"}>
            <span>Биостимулирующий дневной крем</span>
            <span></span>
          </div>
          <div className={"orders_ins_product"}>
            <span>100 мл</span>
            <span>4 576 $</span>
          </div>
        </div>
        <h4 className={"orders_descr_change"}>Изменить</h4>
        <p>Сумма заказа</p>
        <div className={"orders_products"}>
          <div className={"orders_ins_product"}>
            <span>Товары</span>
            <span>9134 $</span>
          </div>
          <div className={"orders_ins_product"}>
            <span>Скидки</span>
            <span>883 $</span>
          </div>
          <div className={"orders_ins_product"}>
            <span>Сумма наличных бонусов</span>
            <span>888 $</span>
          </div>
          <div className={"orders_ins_product_price"}>
            <span>Итого</span>
            <span>{order.total} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDescr;
