import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './invoice.reducer';
import { IInvoice } from 'app/shared/model/invoice.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IInvoiceDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const InvoiceDetail = (props: IInvoiceDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { invoiceEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="gatewayApp.invoice.detail.title">Invoice</Translate> [<b>{invoiceEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="gatewayApp.invoice.code">Code</Translate>
            </span>
          </dt>
          <dd>{invoiceEntity.code}</dd>
          <dt>
            <span id="date">
              <Translate contentKey="gatewayApp.invoice.date">Date</Translate>
            </span>
          </dt>
          <dd>{invoiceEntity.date ? <TextFormat value={invoiceEntity.date} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="details">
              <Translate contentKey="gatewayApp.invoice.details">Details</Translate>
            </span>
          </dt>
          <dd>{invoiceEntity.details}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="gatewayApp.invoice.status">Status</Translate>
            </span>
          </dt>
          <dd>{invoiceEntity.status}</dd>
          <dt>
            <span id="paymentMethod">
              <Translate contentKey="gatewayApp.invoice.paymentMethod">Payment Method</Translate>
            </span>
          </dt>
          <dd>{invoiceEntity.paymentMethod}</dd>
          <dt>
            <span id="paymentDate">
              <Translate contentKey="gatewayApp.invoice.paymentDate">Payment Date</Translate>
            </span>
          </dt>
          <dd>
            {invoiceEntity.paymentDate ? <TextFormat value={invoiceEntity.paymentDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="paymentAmount">
              <Translate contentKey="gatewayApp.invoice.paymentAmount">Payment Amount</Translate>
            </span>
          </dt>
          <dd>{invoiceEntity.paymentAmount}</dd>
        </dl>
        <Button tag={Link} to="/invoice" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/invoice/${invoiceEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ invoice }: IRootState) => ({
  invoiceEntity: invoice.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceDetail);
