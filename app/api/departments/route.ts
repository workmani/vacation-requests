import { NextResponse } from 'next/server';
import { DepartmentService } from '../../../lib/services/index';

/**
 * GET /api/departments
 * 
 * Get all departments
 */
export async function GET() {
  try {
    const departments = await DepartmentService.findAll();
    
    return NextResponse.json({
      departments
    });
  } catch (error) {
    console.error('Error fetching departments:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 