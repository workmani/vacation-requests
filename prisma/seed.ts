import { PrismaClient, Role, TimeOffType, RequestStatus } from '../src/lib/generated/prisma/index.js';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

// Password hashing function
async function hashPassword(password: string): Promise<string> {
  return hash(password, 10);
}

async function main() {
  console.log('🌱 Starting seed process...');

  // Clean up existing data
  console.log('🧹 Cleaning up existing data...');
  await prisma.requestComment.deleteMany({});
  await prisma.timeOffRequest.deleteMany({});
  await prisma.timeOffBalance.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.department.deleteMany({});

  // Create departments
  console.log('🏢 Creating departments...');
  const engineering = await prisma.department.create({
    data: {
      name: 'Engineering',
      description: 'Software development and technical operations',
    },
  });

  const hr = await prisma.department.create({
    data: {
      name: 'Human Resources',
      description: 'HR operations, recruiting, and employee relations',
    },
  });

  const marketing = await prisma.department.create({
    data: {
      name: 'Marketing',
      description: 'Brand management, marketing campaigns, and communications',
    },
  });

  // Create admin user
  console.log('👤 Creating admin user...');
  const adminPassword = await hashPassword('Admin123!');
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: adminPassword,
      role: Role.ADMIN,
      departmentId: hr.id,
    },
  });

  // Create managers
  console.log('👥 Creating managers...');
  const managerPassword = await hashPassword('Manager123!');
  
  const engineeringManager = await prisma.user.create({
    data: {
      name: 'Engineering Manager',
      email: 'eng.manager@example.com',
      password: managerPassword,
      role: Role.MANAGER,
      departmentId: engineering.id,
    },
  });

  const hrManager = await prisma.user.create({
    data: {
      name: 'HR Manager',
      email: 'hr.manager@example.com',
      password: managerPassword,
      role: Role.MANAGER,
      departmentId: hr.id,
    },
  });

  const marketingManager = await prisma.user.create({
    data: {
      name: 'Marketing Manager',
      email: 'marketing.manager@example.com',
      password: managerPassword,
      role: Role.MANAGER,
      departmentId: marketing.id,
    },
  });

  // Create employees
  console.log('👨‍💻 Creating employees...');
  const employeePassword = await hashPassword('Employee123!');
  
  // Engineering employees
  const engineers = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Frontend Developer',
        email: 'frontend@example.com',
        password: employeePassword,
        role: Role.EMPLOYEE,
        departmentId: engineering.id,
        managerId: engineeringManager.id,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Backend Developer',
        email: 'backend@example.com',
        password: employeePassword,
        role: Role.EMPLOYEE,
        departmentId: engineering.id,
        managerId: engineeringManager.id,
      },
    }),
    prisma.user.create({
      data: {
        name: 'QA Engineer',
        email: 'qa@example.com',
        password: employeePassword,
        role: Role.EMPLOYEE,
        departmentId: engineering.id,
        managerId: engineeringManager.id,
      },
    }),
  ]);

  // HR employees
  const hrEmployees = await Promise.all([
    prisma.user.create({
      data: {
        name: 'HR Specialist',
        email: 'hr.specialist@example.com',
        password: employeePassword,
        role: Role.EMPLOYEE,
        departmentId: hr.id,
        managerId: hrManager.id,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Recruiter',
        email: 'recruiter@example.com',
        password: employeePassword,
        role: Role.EMPLOYEE,
        departmentId: hr.id,
        managerId: hrManager.id,
      },
    }),
  ]);

  // Marketing employees
  const marketingEmployees = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Content Writer',
        email: 'content@example.com',
        password: employeePassword,
        role: Role.EMPLOYEE,
        departmentId: marketing.id,
        managerId: marketingManager.id,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Graphic Designer',
        email: 'design@example.com',
        password: employeePassword,
        role: Role.EMPLOYEE,
        departmentId: marketing.id,
        managerId: marketingManager.id,
      },
    }),
  ]);

  // Create time off balances
  console.log('⏱️ Creating time off balances...');
  const allUsers = [
    admin, 
    engineeringManager, hrManager, marketingManager, 
    ...engineers, ...hrEmployees, ...marketingEmployees
  ];
  
  const currentYear = new Date().getFullYear();
  
  for (const user of allUsers) {
    // Create vacation balance
    await prisma.timeOffBalance.create({
      data: {
        userId: user.id,
        year: currentYear,
        type: TimeOffType.VACATION,
        initialDays: 15,
        usedDays: 0,
      },
    });
    
    // Create sick balance
    await prisma.timeOffBalance.create({
      data: {
        userId: user.id,
        year: currentYear,
        type: TimeOffType.SICK,
        initialDays: 10,
        usedDays: 0,
      },
    });
    
    // Create personal balance
    await prisma.timeOffBalance.create({
      data: {
        userId: user.id,
        year: currentYear,
        type: TimeOffType.PERSONAL,
        initialDays: 3,
        usedDays: 0,
      },
    });
  }

  // Create sample time off requests
  console.log('📅 Creating sample time off requests...');
  
  // Frontend Developer vacation request (approved)
  await prisma.timeOffRequest.create({
    data: {
      userId: engineers[0].id,
      type: TimeOffType.VACATION,
      status: RequestStatus.APPROVED,
      startDate: new Date(currentYear, 6, 10), // July 10
      endDate: new Date(currentYear, 6, 14),   // July 14
      duration: 5,
      notes: 'Summer vacation',
      reviewerId: engineeringManager.id,
      reviewedAt: new Date(),
      comments: {
        create: {
          content: 'Approved. Enjoy your vacation!',
        },
      },
    },
  });
  
  // Backend Developer sick request (approved)
  await prisma.timeOffRequest.create({
    data: {
      userId: engineers[1].id,
      type: TimeOffType.SICK,
      status: RequestStatus.APPROVED,
      startDate: new Date(currentYear, 3, 5),  // April 5
      endDate: new Date(currentYear, 3, 6),    // April 6
      duration: 2,
      notes: 'Not feeling well',
      reviewerId: engineeringManager.id,
      reviewedAt: new Date(),
    },
  });
  
  // QA Engineer pending request
  await prisma.timeOffRequest.create({
    data: {
      userId: engineers[2].id,
      type: TimeOffType.PERSONAL,
      status: RequestStatus.PENDING,
      startDate: new Date(currentYear, 8, 15),  // September 15
      endDate: new Date(currentYear, 8, 15),    // September 15
      duration: 1,
      notes: 'Personal appointment',
    },
  });
  
  // HR Specialist rejected request
  await prisma.timeOffRequest.create({
    data: {
      userId: hrEmployees[0].id,
      type: TimeOffType.VACATION,
      status: RequestStatus.REJECTED,
      startDate: new Date(currentYear, 11, 20),  // December 20
      endDate: new Date(currentYear, 0, 5),      // January 5 (next year)
      duration: 10,
      notes: 'Holiday vacation',
      reviewerId: hrManager.id,
      reviewedAt: new Date(),
      comments: {
        create: {
          content: 'Rejected due to critical end-of-year activities.',
        },
      },
    },
  });

  console.log('✅ Seed completed successfully');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 