import { NextResponse } from 'next/server';
import { TimeOffRequestService } from '../../../lib/services/index';

/**
 * GET /api/requests
 * 
 * Get all time off requests with pagination
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const userId = searchParams.get('userId');
    
    let requests;
    let total;
    
    if (userId) {
      requests = await TimeOffRequestService.findByUser(userId, page, limit);
      total = await TimeOffRequestService.count({ userId });
    } else {
      requests = await TimeOffRequestService.findAll(page, limit);
      total = await TimeOffRequestService.count();
    }
    
    return NextResponse.json({
      requests,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching time off requests:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 