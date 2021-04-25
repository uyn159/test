import {RouterPermissionMappingModel} from '../data-components/router-permission-mapping.model';

export const USER_PERMISSION_CODE = {
  EMPLOYEE_MANAGEMENT: 'EMPLOYEE_MANAGEMENT',
  CUSTOMER_MANAGEMENT: 'CUSTOMER_MANAGEMENT',
  PRODUCT_MANAGEMENT: 'PRODUCT_MANAGEMENT',
  SUPPLIER_MANAGEMENT: 'SUPPLIER_MANAGEMENT'
};

export const ROUTER_USER_PERMISSION_MAPPER = [
  new RouterPermissionMappingModel(
    {
      routerLink: '/',
      matchUrl: '',
      name: 'Trang chủ',
      icon: 'fa-home',
      permissions: [],
      sort: 0,
      isMenu: false
    }),
  new RouterPermissionMappingModel(
    {
      routerLink: '/trang-chu',
      matchUrl: '',
      name: 'Trang chủ',
      icon: 'fa-home',
      permissions: [],
      sort: 1,
      isMenu: true
    }),
  new RouterPermissionMappingModel(
    {
      routerLink: '/thay-doi-mat-khau',
      matchUrl: '',
      name: '',
      icon: '',
      permissions: [],
      sort: 0,
      isMenu: false
    }),
  new RouterPermissionMappingModel(
    {
      routerLink: '/color',
      matchUrl: '',
      name: 'Màu sắc',
      icon: 'fas fa-paint-brush',
      permissions: [
        USER_PERMISSION_CODE.PRODUCT_MANAGEMENT
      ],
      sort: 0,
      isMenu: true
    }),
  new RouterPermissionMappingModel(
    {
      routerLink: '/size',
      matchUrl: '',
      name: 'Kích thước',
      icon: 'fas fa-object-group',
      permissions: [
        USER_PERMISSION_CODE.PRODUCT_MANAGEMENT
      ],
      sort: 1,
      isMenu: true
    }),
  new RouterPermissionMappingModel(
    {
      routerLink: '/category',
      matchUrl: '',
      name: 'Danh mục hàng hoá',
      icon: 'fas fa-boxes',
      permissions: [
        USER_PERMISSION_CODE.PRODUCT_MANAGEMENT
      ],
      sort: 2,
      isMenu: true
    }),
  new RouterPermissionMappingModel(
    {
      routerLink: '/sub-category',
      matchUrl: '',
      name: 'Danh mục con hàng hoá',
      icon: 'fas fa-boxes',
      permissions: [
        USER_PERMISSION_CODE.PRODUCT_MANAGEMENT
      ],
      sort: 3,
      isMenu: true
    }),
  new RouterPermissionMappingModel(
    {
      routerLink: '/role',
      matchUrl: '',
      name: 'Quản lý quyền',
      icon: 'fas fa-users',
      permissions: [
        USER_PERMISSION_CODE.EMPLOYEE_MANAGEMENT
      ],
      sort: 0,
      isMenu: true
    }),
  new RouterPermissionMappingModel(
    {
      routerLink: '/supplier',
      matchUrl: '',
      name: 'Quản lý nhà cung cấp',
      icon: 'fas fa-users',
      permissions: [
        USER_PERMISSION_CODE.SUPPLIER_MANAGEMENT
      ],
      sort: 0,
      isMenu: true
    }),
  new RouterPermissionMappingModel(
    {
      routerLink: '/employee',
      matchUrl: '',
      name: 'Quản lý nhân viên',
      icon: 'fas-fa-users',
      permissions: [
        USER_PERMISSION_CODE.EMPLOYEE_MANAGEMENT
      ],
      sort: 2,
      isMenu: true
    }),
];
