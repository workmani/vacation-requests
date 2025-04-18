'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  departmentId: string | null;
  managerId: string | null;
};

type Department = {
  id: string;
  name: string;
  description: string | null;
};

export default function TestPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Fetch users
        const usersRes = await fetch('/api/users');
        if (!usersRes.ok) throw new Error('Failed to fetch users');
        const usersData = await usersRes.json();
        setUsers(usersData.users);
        
        // Fetch departments
        const departmentsRes = await fetch('/api/departments');
        if (departmentsRes.ok) {
          const departmentsData = await departmentsRes.json();
          setDepartments(departmentsData.departments);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function getDepartmentName(deptId: string | null) {
    if (!deptId) return 'None';
    const dept = departments.find(d => d.id === deptId);
    return dept ? dept.name : 'Unknown';
  }

  if (loading) return (
    <div className="flex h-[50vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );

  if (error) return (
    <Alert variant="destructive">
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Database Test Page</h1>
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          {users.length === 0 ? (
            <p>No users found</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{getDepartmentName(user.departmentId)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="mt-4">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
} 