declare namespace API {
  type AccessType = 'DIRECTORY' | 'MENU' | 'API' | 'COMPONENT';

  type API = {
    /** CreatedAt create time */
    createdAt?: string;
    handler?: string;
    history?: boolean;
    /** ID primary key */
    id?: string;
    method?: string;
    name?: string;
    path?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type AppConfig = {
    /** Auth 是否需要认证 如果为true，只有登录后才会返回 */
    auth?: boolean;
    /** CreatedAt create time */
    createdAt?: string;
    /** Group 分组 */
    group: string;
    /** ID primary key */
    id?: string;
    /** Name 名称 */
    name: string;
    /** TenantID tenant id */
    tenantID?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
    /** Value 值 */
    value?: string;
  };

  type AppConfigControlRequest = {
    data: Record<string, any>;
  };

  type BaseRule = {
    id?: string;
    len?: number;
    max?: number;
    message?: string;
    min?: number;
    pattern?: string;
    required?: boolean;
    type?: RuleType;
    validateTrigger?: string;
    warningOnly?: boolean;
    whitespace?: boolean;
  };

  type ColumnType = {
    dataIndex?: string;
    hideInDescriptions?: boolean;
    hideInForm?: boolean;
    hideInTable?: boolean;
    pk?: boolean;
    title?: string;
    validateRules?: BaseRule[];
    valueEnum?: Record<string, any>;
    valueType?: string;
  };

  type DataScope =
    | 'all'
    | 'currentDept'
    | 'currentAndChildrenDept'
    | 'customDept'
    | 'self'
    | 'selfAndChildren'
    | 'selfAndAllChildren';

  type deleteApisIdParams = {
    /** id */
    id: string;
  };

  type deleteDepartmentsIdParams = {
    /** id */
    id: string;
  };

  type deleteFieldsIdParams = {
    /** id */
    id: string;
  };

  type deleteLanguagesIdParams = {
    /** id */
    id: string;
  };

  type deleteMenusIdParams = {
    /** id */
    id: string;
  };

  type deleteModelsIdParams = {
    /** id */
    id: string;
  };

  type deleteNoticesIdParams = {
    /** id */
    id: string;
  };

  type deleteOptionsIdParams = {
    /** id */
    id: string;
  };

  type deletePostsIdParams = {
    /** id */
    id: string;
  };

  type deleteRolesIdParams = {
    /** id */
    id: string;
  };

  type deleteSystemConfigsIdParams = {
    /** id */
    id: string;
  };

  type deleteTasksIdParams = {
    /** id */
    id: string;
  };

  type deleteTenantsIdParams = {
    /** id */
    id: string;
  };

  type deleteUsersIdParams = {
    /** id */
    id: string;
  };

  type Department = {
    /** Code 部门编码 */
    code?: string;
    /** CreatedAt create time */
    createdAt?: string;
    /** Email 邮箱 */
    email?: string;
    /** ID primary key */
    id?: string;
    /** LeaderID 部分负责人ID */
    leaderID?: string;
    /** Name 部门名称 */
    name?: string;
    /** ParentID 父级id */
    parentID?: string;
    /** Phone 联系电话 */
    phone?: string;
    /** Sort 排序 */
    sort?: number;
    /** Status 状态 */
    status?: Status;
    /** TenantID tenant id */
    tenantID?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type FakeCaptchaRequest = {
    phone: string;
  };

  type FakeCaptchaResponse = {
    code?: number;
    status?: string;
  };

  type Field = {
    associationsID?: string;
    comment?: string;
    /** CreatedAt create time */
    createdAt?: string;
    default?: string;
    formComponent?: string;
    hideInDescriptions?: boolean;
    hideInForm?: boolean;
    hideInTable?: boolean;
    /** ID primary key */
    id?: string;
    index?: string;
    jsonTag?: string;
    label?: string;
    modelID?: string;
    name?: string;
    notNull?: boolean;
    primaryKey?: string;
    rules?: BaseRule[];
    search?: string;
    size?: number;
    sort?: number;
    tableComponent?: string;
    type?: string;
    unique?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
    valueEnumName?: string;
    width?: string;
  };

  type GenerateParams = {
    params?: Record<string, any>;
    repo: string;
    service?: string;
  };

  type getApisIdParams = {
    /** id */
    id: string;
  };

  type getApisParams = {
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
  };

  type getAppConfigsGroupParams = {
    /** group */
    group: string;
  };

  type GetAuthorizeResponse = {
    paths?: string[];
    roleID?: string;
  };

  type getDepartmentsIdParams = {
    /** id */
    id: string;
  };

  type getDepartmentsParams = {
    /** 部门名称 */
    name?: string;
    /** 父级部门ID */
    parentID?: string;
    /** 状态 */
    status?: string;
    /** 页码 */
    page?: number;
    /** 每页条数 */
    pageSize?: number;
  };

  type getDocumentationKeyParams = {
    /** key */
    key: string;
  };

  type getFieldsIdParams = {
    /** id */
    id: string;
  };

  type getFieldsParams = {
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
    /** modelID */
    modelID?: string;
  };

  type getGithubCallbackParams = {
    /** code */
    code: string;
    /** state */
    state: string;
  };

  type getGithubGetLoginUrlParams = {
    /** state */
    state: string;
  };

  type getLanguagesIdParams = {
    /** id */
    id: string;
  };

  type getLanguagesParams = {
    /** name */
    name?: string;
    /** status */
    status?: string;
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
  };

  type getLarkCallbackParams = {
    /** code */
    code: string;
    /** state */
    state: string;
  };

  type getMenuApiIdParams = {
    /** id */
    id: string;
  };

  type getMenusIdParams = {
    /** id */
    id: string;
    /** preloads */
    preloads?: string[];
  };

  type getMenusParams = {
    /** name */
    name?: string;
    /** status */
    status?: string;
    /** show */
    show?: boolean;
    /** parentID */
    parentID?: string;
    /** type */
    type?: string[];
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
  };

  type getModelsIdParams = {
    /** id */
    id: string;
  };

  type getModelsParams = {
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
    /** preloads */
    preloads?: string[];
  };

  type getNoticeReadIdParams = {
    /** id */
    id: string;
  };

  type getNoticesIdParams = {
    /** id */
    id: string;
  };

  type getNoticesParams = {
    /** title */
    title?: string;
    /** status */
    status?: string;
    /** userID */
    userID?: string;
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
  };

  type getOptionsIdParams = {
    /** id */
    id: string;
  };

  type getOptionsParams = {
    /** name */
    name?: string;
    /** status */
    status?: string;
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
  };

  type getPostsIdParams = {
    /** id */
    id: string;
  };

  type getPostsParams = {
    /** 岗位名称 */
    name?: string;
    /** 父级岗位ID */
    parentID?: string;
    /** 状态 */
    status?: string;
    /** 页码 */
    page?: number;
    /** 每页条数 */
    pageSize?: number;
  };

  type getRoleAuthorizeRoleIDParams = {
    /** roleID */
    roleID: string;
  };

  type getRolesIdParams = {
    /** id */
    id: string;
  };

  type getRolesParams = {
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
    /** id */
    id?: string;
    /** name */
    name?: string;
    /** status */
    status?: string;
    /** remark */
    remark?: string;
  };

  type getStatisticsNameParams = {
    /** name */
    name: string;
  };

  type getSystemConfigsIdParams = {
    /** id */
    id: string;
  };

  type getSystemConfigsParams = {
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
  };

  type getTaskOperateIdParams = {
    /** 任务ID */
    id: string;
    /** 操作类型 */
    operate: string;
  };

  type getTasksIdParams = {
    /** id */
    id: string;
  };

  type getTasksParams = {
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
    /** id */
    id?: string;
    /** name */
    name?: string;
    /** status */
    status?: string;
    /** remark */
    remark?: string;
  };

  type getTemplateGetBranchesParams = {
    /** template source */
    source: string;
    /** access token */
    accessToken?: string;
  };

  type getTemplateGetParamsParams = {
    /** template source */
    source: string;
    /** branch default:HEAD */
    branch?: string;
    /** path default:. */
    path?: string;
    /** access token */
    accessToken?: string;
  };

  type getTemplateGetPathParams = {
    /** template source */
    source: string;
    /** branch default:HEAD */
    branch?: string;
    /** access token */
    accessToken?: string;
  };

  type getTenantsIdParams = {
    /** id */
    id: string;
    /** preloads */
    preloads?: string[];
  };

  type getTenantsParams = {
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
    /** id */
    id?: string;
    /** name */
    name?: string;
    /** status */
    status?: string;
  };

  type getUserConfigsGroupParams = {
    /** group */
    group: string;
  };

  type getUsersIdParams = {
    /** id */
    id: string;
  };

  type getUsersParams = {
    /** page */
    page?: number;
    /** pageSize */
    pageSize?: number;
    /** id */
    id?: string;
    /** name */
    name?: string;
  };

  type Language = {
    /** CreatedAt create time */
    createdAt?: string;
    /** Defines */
    defines?: LanguageDefine[];
    /** ID primary key */
    id?: string;
    /** Name 名称 */
    name: string;
    /** Remark 备注 */
    remark?: string;
    /** Statue 状态 */
    status?: Status;
    /** TenantID tenant id */
    tenantID?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type LanguageDefine = {
    /** Group 分组 */
    group: string;
    /** ID 主键 */
    id?: string;
    /** Key 键 */
    key: string;
    /** Value 值 */
    value: string;
  };

  type LoginResponse = {
    code?: number;
    expire?: string;
    token?: string;
  };

  type Menu = {
    /** Access 权限配置，需要与 plugin-access 插件配合使用 */
    access?: string;
    /** Component 组件 */
    component?: string;
    /** CreatedAt create time */
    createdAt?: string;
    /** FixedSideBar 固定菜单 */
    fixSiderbar?: boolean;
    /** FixedHeader 固定顶栏 */
    fixedHeader?: boolean;
    /** FlatMenu 子项往上提，仍旧展示 */
    flatMenu?: boolean;
    /** FooterRender 不展示页脚 */
    footerRender?: boolean;
    /** HeaderRender 不展示顶栏 */
    headerRender?: boolean;
    /** HeaderTheme 顶部导航的主题，mix 模式生效 */
    headerTheme?: string;
    /** HideChildrenInMenu 隐藏子菜单 */
    hideChildrenInMenu?: boolean;
    /** HideInBreadcrumb 在面包屑中隐藏 */
    hideInBreadcrumb?: boolean;
    /** HideInMenu 隐藏自己和子菜单 */
    hideInMenu?: boolean;
    /** Icon 图标 */
    icon?: string;
    /** ID primary key */
    id?: string;
    /** Layout 导航菜单的位置, side 为正常模式，top菜单显示在顶部，mix 两种兼有 */
    layout?: string;
    /** MenuHeaderRender 不展示菜单头部 */
    menuHeaderRender?: boolean;
    /** MenuRender 不展示菜单 */
    menuRender?: boolean;
    /** Method 请求方法 */
    method?: string;
    /** Name 菜单名称 */
    name?: string;
    /** NavTheme 导航菜单的主题 */
    navTheme?: string;
    /** ParentID 父级id */
    parentID?: string;
    /** Path 路由 */
    path?: string;
    /** Permission 菜单权限 */
    permission?: string;
    /** Sort 排序 */
    sort?: number;
    /** Status 状态 */
    status?: Status;
    /** Target 新页面打开 */
    target?: string;
    /** TenantID tenant id */
    tenantID?: string;
    /** Type 菜单类型 */
    type?: AccessType;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type MenuBindAPIRequest = {
    menuID: string;
    paths: string[];
  };

  type Model = {
    auth?: boolean;
    /** CreatedAt create time */
    createdAt?: string;
    description?: string;
    fields?: Field[];
    generatedData?: boolean;
    hardDeleted?: boolean;
    /** ID primary key */
    id?: string;
    multiTenant?: boolean;
    name?: string;
    path?: string;
    table?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type ModelGenerateDataRequest = {
    id: string;
    menuParentID?: string;
  };

  type MonitorCPUInfo = {
    cacheSize?: number;
    coreId?: string;
    cores?: number;
    cpu?: number;
    /** CPUUsagePercent CPU使用率 */
    cpuUsagePercent?: number;
    family?: string;
    flags?: string[];
    mhz?: number;
    microcode?: string;
    model?: string;
    modelName?: string;
    physicalId?: string;
    stepping?: number;
    vendorId?: string;
  };

  type MonitorResponse = {
    /** CPUInfo CPU信息 */
    cpuInfo?: MonitorCPUInfo[];
    /** CPULogicalCore CPU逻辑核心数 */
    cpuLogicalCore?: number;
    /** CPUPhysicalCore CPU物理核心数 */
    cpuPhysicalCore?: number;
    /** DiskTotal 磁盘总量 */
    diskTotal?: number;
    /** DiskUsage 磁盘使用量 */
    diskUsage?: number;
    /** DiskUsagePercent 磁盘使用率 */
    diskUsagePercent?: number;
    /** MemoryAvailable 内存可用量 */
    memoryAvailable?: number;
    /** MemoryFree 内存空闲量 */
    memoryFree?: number;
    /** MemoryTotal 内存总量 */
    memoryTotal?: number;
    /** MemoryUsage 内存使用量 */
    memoryUsage?: number;
    /** MemoryUsagePercent 内存使用率 */
    memoryUsagePercent?: number;
  };

  type Notice = {
    avatar?: string;
    /** CreatedAt create time */
    createdAt?: string;
    datetime?: string;
    description?: string;
    extra?: string;
    /** ID primary key */
    id?: string;
    key?: string;
    read?: boolean;
    status?: string;
    /** TenantID tenant id */
    tenantID?: string;
    title?: string;
    type?: NoticeType;
    /** UpdatedAt update time */
    updatedAt?: string;
    userID?: string;
  };

  type NoticeType = 'notification' | 'message' | 'event' | 'mail';

  type OAuth2Provider = 'github' | 'lark';

  type OauthToken = {
    /** AccessToken is the token that authorizes and authenticates
the requests. */
    accessToken?: string;
    /** Expiry is the optional expiration time of the access token.

If zero, TokenSource implementations will reuse the same
token forever and RefreshToken or equivalent
mechanisms for that TokenSource will not be used. */
    expiry?: string;
    refreshExpiry?: string;
    /** RefreshToken is a token that's used by the application
(as opposed to the user) to refresh the access token
if it expires. */
    refreshToken?: string;
    /** TokenType is the type of token.
The Type method returns either this or "Bearer", the default. */
    tokenType?: string;
  };

  type Option = {
    /** CreatedAt create time */
    createdAt?: string;
    /** ID primary key */
    id?: string;
    /** Items 选项内容 */
    items?: OptionItem[];
    /** Name 选项名称 */
    name?: string;
    /** Remark 备注 */
    remark?: string;
    /** Status 状态 */
    status?: Status;
    /** TenantID tenant id */
    tenantID?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type OptionItem = {
    color?: string;
    id?: string;
    key?: string;
    label?: string;
    sort?: number;
    value?: string;
  };

  type Page = {
    current?: number;
    pageSize?: number;
    total?: number;
  };

  type PasswordResetRequest = {
    password: string;
    userID: string;
  };

  type Post = {
    /** Code 岗位编码 */
    code?: string;
    /** CreatedAt create time */
    createdAt?: string;
    /** DataScope 数据权限 */
    dataScope?: DataScope;
    /** DeptIDSArr 部门id数组 */
    deptIDS?: string[];
    /** ID primary key */
    id?: string;
    /** Name 岗位名称 */
    name?: string;
    /** ParentID 父级id */
    parentID?: string;
    /** Sort 排序 */
    sort?: number;
    /** Status 状态 */
    status?: Status;
    /** TenantID tenant id */
    tenantID?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type postRoleAuthorizeRoleIDParams = {
    /** roleID */
    roleID: string;
  };

  type putApisIdParams = {
    /** id */
    id: string;
  };

  type putAppConfigsGroupParams = {
    /** group */
    group: string;
  };

  type putDepartmentsIdParams = {
    /** id */
    id: string;
  };

  type putFieldsIdParams = {
    /** id */
    id: string;
  };

  type putLanguagesIdParams = {
    /** id */
    id: string;
  };

  type putMenuAuthorizeIdParams = {
    /** id */
    id: string;
  };

  type putMenusIdParams = {
    /** id */
    id: string;
  };

  type putModelsIdParams = {
    /** id */
    id: string;
  };

  type putNoticeReadIdParams = {
    /** id */
    id: string;
  };

  type putNoticesIdParams = {
    /** id */
    id: string;
  };

  type putOptionsIdParams = {
    /** id */
    id: string;
  };

  type putPostsIdParams = {
    /** id */
    id: string;
  };

  type putRolesIdParams = {
    /** id */
    id: string;
  };

  type putSystemConfigsIdParams = {
    /** id */
    id: string;
  };

  type putTasksIdParams = {
    /** id */
    id: string;
  };

  type putTenantsIdParams = {
    /** id */
    id: string;
  };

  type putUserConfigsGroupParams = {
    /** group */
    group: string;
  };

  type putUsersIdParams = {
    /** id */
    id: string;
  };

  type putUserUserIDPasswordResetParams = {
    /** userID */
    userID: string;
  };

  type Response = {
    code?: number;
    errorCode?: string;
    errorMessage?: string;
    host?: string;
    showType?: number;
    status?: string;
    success?: boolean;
    traceId?: string;
  };

  type Role = {
    /** CreatedAt create time */
    createdAt?: string;
    default?: boolean;
    /** ID primary key */
    id?: string;
    name?: string;
    remark?: string;
    root?: boolean;
    status?: Status;
    /** TenantID tenant id */
    tenantID?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type RuleType =
    | 'string'
    | 'number'
    | 'boolean'
    | 'method'
    | 'regexp'
    | 'integer'
    | 'float'
    | 'object'
    | 'enum'
    | 'date'
    | 'url'
    | 'hex'
    | 'email';

  type Scheme = 'yaml' | 'yml' | 'json';

  type SetAuthorizeRequest = {
    paths?: string[];
  };

  type StatisticsGetResponse = {
    items?: StatisticsItem[];
    name?: string;
    type?: string;
  };

  type StatisticsItem = {
    scales?: number;
    time?: string;
  };

  type Status = '' | 'enabled' | 'disabled' | 'locked';

  type SystemConfig = {
    /** Content 内容 */
    content?: string;
    /** CreatedAt create time */
    createdAt?: string;
    /** Ext 扩展名 */
    ext: Scheme;
    /** ID primary key */
    id?: string;
    /** 内置配置 */
    isBuiltIn?: boolean;
    /** Name 名称 */
    name: string;
    /** remark 备注 */
    remark?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type Task = {
    args?: string[];
    body?: string;
    checkedAt?: string;
    command?: string;
    /** CreatedAt create time */
    createdAt?: string;
    /** CreatorID creator id */
    creatorID?: string;
    endpoint?: string;
    entryID?: number;
    /** ID primary key */
    id?: string;
    metadata?: string;
    method?: string;
    name?: string;
    once?: boolean;
    protocol?: string;
    python?: string;
    remark?: string;
    spec?: string;
    status?: Status;
    /** TenantID tenant id */
    tenantID?: string;
    timeout?: number;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type TemplateGenerateReq = {
    accessToken?: string;
    email?: string;
    generate?: GenerateParams;
    template?: TemplateParams;
  };

  type TemplateGenerateResp = {
    branch?: string;
    repo?: string;
  };

  type TemplateGetBranchesResp = {
    branches?: string[];
  };

  type TemplateGetParamsResp = {
    params?: TemplateParam[];
  };

  type TemplateGetPathResp = {
    path?: string[];
  };

  type TemplateParam = {
    name?: string;
    tip?: string;
  };

  type TemplateParams = {
    branch?: string;
    path?: string;
    source: string;
  };

  type Tenant = {
    /** CreatedAt create time */
    createdAt?: string;
    default?: boolean;
    domains?: TenantDomain[];
    email?: string;
    expire?: string;
    /** ID primary key */
    id?: string;
    name?: string;
    password?: string;
    remark?: string;
    status?: Status;
    /** UpdatedAt update time */
    updatedAt?: string;
    username?: string;
  };

  type TenantDomain = {
    /** CreatedAt create time */
    createdAt?: string;
    domain?: string;
    /** ID primary key */
    id?: string;
    name?: string;
    tenantId?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
  };

  type UpdateAuthorizeRequest = {
    keys: string[];
    roleID: string;
  };

  type UpdateUserInfoRequest = {
    /** Address 地址 */
    address?: string;
    /** Avatar 头像 */
    avatar?: string;
    /** City 城市 */
    city?: string;
    /** Country 国家 */
    country?: string;
    /** Email 邮箱 */
    email?: string;
    /** Group 组别 */
    group?: string;
    /** Name 昵称 */
    name?: string;
    /** Phone 手机号 */
    phone?: string;
    /** Profile 个人简介 */
    profile?: string;
    /** Province 省份 */
    province?: string;
    /** Signature 个性签名 */
    signature?: string;
    /** Tags 标签 */
    tags?: string[];
    /** Title 职位 */
    title?: string;
  };

  type User = {
    address?: string;
    avatar?: string;
    city?: string;
    country?: string;
    /** CreatedAt create time */
    createdAt?: string;
    department?: Department;
    email?: string;
    group?: string;
    /** ID primary key */
    id?: string;
    name?: string;
    oauth2?: UserOAuth2[];
    password?: string;
    passwordStrength?: string;
    permissions?: Record<string, any>;
    phone?: string;
    post?: Post;
    profile?: string;
    province?: string;
    role?: Role;
    signature?: string;
    status?: Status;
    tags?: string[];
    /** TenantID tenant id */
    tenantID?: string;
    title?: string;
    type?: OAuth2Provider;
    /** UpdatedAt update time */
    updatedAt?: string;
    username?: string;
  };

  type UserConfigControlRequest = {
    data: Record<string, any>;
  };

  type UserLogin = {
    department?: Department;
    email?: string;
    oauth2?: UserOAuth2[];
    password?: string;
    passwordStrength?: string;
    post?: Post;
    role?: Role;
    status?: Status;
    type?: OAuth2Provider;
    username?: string;
  };

  type UserOAuth2 = {
    address?: string;
    birthdata?: string;
    /** CreatedAt create time */
    createdAt?: string;
    email?: string;
    email_verified?: boolean;
    employee_no?: string;
    family_name?: string;
    gender?: string;
    given_name?: string;
    /** ID primary key */
    id?: string;
    locale?: string;
    middle_name?: string;
    name?: string;
    nickname?: string;
    openID?: string;
    phone_number?: string;
    phone_number_verified?: boolean;
    picture?: string;
    preferred_username?: string;
    profile?: string;
    sub?: string;
    /** TenantID tenant id */
    tenantID?: string;
    type?: OAuth2Provider;
    unionID?: string;
    /** UpdatedAt update time */
    updatedAt?: string;
    user_id?: string;
    website?: string;
    zoneinfo?: string;
  };

  type ValueEnumType = {
    color?: string;
    disabled?: boolean;
    status?: string;
    text?: string;
  };

  type VirtualModelObject = {
    columns?: ColumnType[];
    name?: string;
  };
}
