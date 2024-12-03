// Authentication and Security Types
export interface User {
  id: string;
  email: string;
  password: string; // Hashed using bcrypt
  passwordSalt: string; // Unique salt for each user
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  mfaEnabled: boolean;
  mfaSecret?: string;
  lastLoginAt?: Date;
  loginAttempts: number;
  lockoutUntil?: Date;
  status: 'active' | 'inactive' | 'suspended';
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date; // Soft delete
}

export type UserRole = {
  name: 'customer' | 'admin' | 'support';
  permissions: Permission[];
};

export interface Permission {
  id: string;
  name: string;
  description: string;
  scope: string;
}

export interface UserSession {
  id: string;
  userId: string;
  token: string; // JWT token
  deviceInfo: {
    userAgent: string;
    ip: string;
    device: string;
    location?: string;
  };
  isValid: boolean;
  expiresAt: Date;
  createdAt: Date;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  changes: Record<string, unknown>;
  ipAddress: string;
  userAgent: string;
  createdAt: Date;
}

// User Profile with Encryption
export interface UserProfile {
  userId: string;
  company?: string;
  phone?: string; // Encrypted
  addresses: Address[];
  preferences: UserPreferences;
  taxInformation?: string; // Encrypted
  verifiedEmail: boolean;
  verifiedPhone: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id: string;
  userId: string;
  type: 'billing' | 'shipping';
  street: string; // Encrypted
  city: string;
  state: string;
  country: string;
  zipCode: string;
  isDefault: boolean;
  verifiedAt?: Date;
}

// Product with Version Control
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: {
    monthly: number;
    annual: number;
    setupFee?: number;
    currency: string;
  };
  category: Category;
  features: Feature[];
  images: Image[];
  status: 'active' | 'inactive' | 'coming_soon';
  version: string;
  previousVersions: ProductVersion[];
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date; // Soft delete
}

export interface ProductVersion {
  id: string;
  productId: string;
  version: string;
  changes: Record<string, unknown>;
  createdAt: Date;
}

// Payment Security
export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  provider: 'stripe' | 'paypal';
  paymentMethodId: string;
  encryptedData: string; // Encrypted payment details
  riskScore?: number;
  verificationStatus: 'pending' | 'verified' | 'failed';
  errorCode?: string;
  errorMessage?: string;
  ipAddress: string;
  createdAt: Date;
}

export interface PaymentMethod {
  id: string;
  userId: string;
  type: 'card' | 'paypal';
  provider: 'stripe' | 'paypal';
  isDefault: boolean;
  tokenizedData: string; // Encrypted payment method data
  fingerprint: string; // Unique identifier for the payment method
  last4?: string;
  expiryMonth?: number;
  expiryYear?: number;
  brand?: string;
  verifiedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Rate Limiting
export interface RateLimit {
  id: string;
  key: string; // IP or userId
  endpoint: string;
  count: number;
  resetAt: Date;
}

// API Keys
export interface ApiKey {
  id: string;
  userId: string;
  key: string; // Hashed
  name: string;
  permissions: string[];
  lastUsedAt?: Date;
  expiresAt?: Date;
  createdAt: Date;
}

// The rest of the types remain the same but with added security fields
export interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  total: number;
  subtotal: number;
  tax: number;
  discount?: number;
  couponCode?: string;
  billingAddressId: string;
  paymentIntentId: string;
  signatureHash: string; // Digital signature for order integrity
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  productId: string;
  status: SubscriptionStatus;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  priceId: string;
  quantity: number;
  signatureHash: string; // Digital signature for subscription integrity
  createdAt: Date;
  updatedAt: Date;
}

// Security Configurations
export interface SecurityConfig {
  passwordPolicy: {
    minLength: number;
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumbers: boolean;
    requireSpecialChars: boolean;
    maxAge: number; // days
  };
  mfa: {
    required: boolean;
    methods: ('app' | 'sms' | 'email')[];
  };
  session: {
    duration: number; // minutes
    maxConcurrent: number;
  };
  rateLimit: {
    window: number; // minutes
    max: number;
  };
}