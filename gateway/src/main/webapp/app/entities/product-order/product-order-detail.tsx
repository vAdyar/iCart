import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './product-order.reducer';
import { IProductOrder } from 'app/shared/model/product-order.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IProductOrderDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ProductOrderDetail = (props: IProductOrderDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { productOrderEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="gatewayApp.productOrder.detail.title">ProductOrder</Translate> [<b>{productOrderEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="customerId">
              <Translate contentKey="gatewayApp.productOrder.customerId">Customer Id</Translate>
            </span>
          </dt>
          <dd>{productOrderEntity.customerId}</dd>
          <dt>
            <span id="orderItems">
              <Translate contentKey="gatewayApp.productOrder.orderItems">Order Items</Translate>
            </span>
          </dt>
          <dd>{productOrderEntity.orderItems}</dd>
          <dt>
            <span id="placedDate">
              <Translate contentKey="gatewayApp.productOrder.placedDate">Placed Date</Translate>
            </span>
          </dt>
          <dd>
            {productOrderEntity.placedDate ? (
              <TextFormat value={productOrderEntity.placedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="status">
              <Translate contentKey="gatewayApp.productOrder.status">Status</Translate>
            </span>
          </dt>
          <dd>{productOrderEntity.status}</dd>
          <dt>
            <span id="code">
              <Translate contentKey="gatewayApp.productOrder.code">Code</Translate>
            </span>
          </dt>
          <dd>{productOrderEntity.code}</dd>
          <dt>
            <Translate contentKey="gatewayApp.productOrder.invoice">Invoice</Translate>
          </dt>
          <dd>{productOrderEntity.invoice ? productOrderEntity.invoice.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/product-order" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/product-order/${productOrderEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ productOrder }: IRootState) => ({
  productOrderEntity: productOrder.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrderDetail);
